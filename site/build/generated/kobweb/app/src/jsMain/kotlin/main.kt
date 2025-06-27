import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.browser.api
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.BasePath
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.navigation.remove
import com.varabyte.kobweb.silk.defer.DeferringHost
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.dom.hasClass
import kotlinx.dom.removeClass
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.EventSource
import org.w3c.dom.EventSourceInit
import org.w3c.dom.MessageEvent
import org.w3c.dom.`get`

private fun forceReloadNow() {
    window.stop()
    window.location.reload()
}

private fun handleServerStatusEvents() {
    val status = document.getElementById("status")!!
    var lastVersion: Int? = null
    var shouldReload = false

    val warningIcon = status.children[0]!!
    val spinnerIcon = status.children[1]!!
    val statusText = status.children[2]!!

    status.addEventListener("transitionend", {
        if (status.hasClass("fade-out")) {
            status.removeClass("fade-out")
            if (shouldReload) {
                forceReloadNow()
            }
        }
    })

    val eventSource = EventSource("/api/kobweb-status", EventSourceInit(true))
    eventSource.addEventListener("version", { evt ->
        val version = (evt as MessageEvent).data.toString().toInt()
        if (lastVersion == null) {
            lastVersion = version
        }
        if (lastVersion != version) {
            lastVersion = version
            if (document.asDynamic().hidden) {
                // Reload immediately when the page is not visible as the animation will not run
                forceReloadNow()
            } else if (status.className.isNotEmpty()) {
                shouldReload = true
            } else {
                // Not sure if we can get here but if we can't rely on the status transition
                // to reload we should do it ourselves.
                forceReloadNow()
            }
        }
    })

    eventSource.addEventListener("status", { evt ->
        val values: dynamic = JSON.parse<Any>((evt as MessageEvent).data.toString())
        val text = values.text as String
        val isError = (values.isError as String).toBoolean()
        if (text.isNotBlank()) {
            warningIcon.className = if (isError) "visible" else "hidden"
            spinnerIcon.className = if (isError) "hidden" else "visible"
            statusText.innerHTML = "<i>$text</i>"
            status.className = "fade-in"
        } else {
            if (status.className == "fade-in") {
                status.className = "fade-out"
            }
        }
    })

    eventSource.onerror = { eventSource.close() }
}

public fun main() {
    handleServerStatusEvents()

    window.api.logOnError = true

    AppGlobals.initialize(mapOf("title" to "Musaib Shabir"))
    BasePath.set("/Portfolio/")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { musaib.pages.HomePage() }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerStyle("headline-text", musaib.HeadlineTextStyle)
        ctx.theme.registerStyle("subheadline-text", musaib.SubheadlineTextStyle)
        ctx.theme.registerStyle("about", musaib.components.sections.about.style.AboutStyle)
        ctx.theme.registerStyle("skills-section",
                musaib.components.sections.about.style.SkillsSectionStyle)
        ctx.theme.registerStyle("skills-grid",
                musaib.components.sections.about.style.SkillsGridStyle)
        ctx.theme.registerStyle("about-discription",
                musaib.components.sections.about.style.AboutDiscriptionStyle)
        ctx.theme.registerStyle("footer", musaib.components.sections.footer.style.FooterStyle)
        ctx.theme.registerStyle("footer-text",
                musaib.components.sections.footer.style.FooterTextStyle)
        ctx.theme.registerStyle("footer-location",
                musaib.components.sections.footer.style.FooterLocationStyle)
        ctx.theme.registerStyle("footer-description",
                musaib.components.sections.footer.style.FooterDescriptionStyle)
        ctx.theme.registerStyle("hero-section",
                musaib.components.sections.home.style.HeroSectionStyle)
        ctx.theme.registerStyle("hello-im", musaib.components.sections.home.style.HelloImStyle)
        ctx.theme.registerStyle("user-name", musaib.components.sections.home.style.UserNameStyle)
        ctx.theme.registerStyle("users-message",
                musaib.components.sections.home.style.UsersMessageStyle)
        ctx.theme.registerStyle("nav-header",
                musaib.components.sections.navHeader.styles.NavHeaderStyle)
        ctx.theme.registerStyle("side-menu",
                musaib.components.sections.navHeader.styles.SideMenuStyle)
        ctx.theme.registerStyle("menu", musaib.components.sections.navHeader.styles.MenuStyle)
        ctx.theme.registerStyle("projects", musaib.components.sections.projects.style.ProjectsStyle)
        ctx.theme.registerStyle("section-title", musaib.components.SectionTitleStyle)
        ctx.theme.registerStyle("section-discription", musaib.components.SectionDiscriptionStyle)
        ctx.theme.registerStyle("skill-text", musaib.components.styles.SkillTextStyle)
        ctx.theme.registerStyle("skill-proficiency-text",
                musaib.components.styles.SkillProficiencyTextStyle)
        ctx.theme.registerStyle("main-button", musaib.components.styles.MainButtonStyle)
        ctx.theme.registerStyle("section-container", musaib.components.styles.SectionContainerStyle)
        ctx.theme.registerStyle("social-link", musaib.components.styles.SocialLinkStyle)
        ctx.theme.registerVariant("-circle", musaib.CircleButtonVariant
        )
        ctx.theme.registerVariant("-uncolored", musaib.UncoloredButtonVariant
        )
        ctx.theme.registerVariant("-skill-item",
                musaib.components.sections.about.style.SkillItemImageVariant
        )
        ctx.theme.registerVariant("-normal", musaib.components.styles.ButtonColors.NormalButton
        )
        ctx.theme.registerKeyframes("hero-container-key-frames",
                musaib.components.sections.home.style.HeroContainerKeyFrames)
        ctx.theme.registerKeyframes("side-menu-slide-in",
                musaib.components.sections.navHeader.styles.SideMenuSlideInAnim)
        musaib.initColorMode(ctx)
        musaib.initSiteStyles(ctx)
        musaib.initTheme(ctx)
    }

    router.tryRoutingTo(BasePath.remove(window.location.href.removePrefix(window.origin)),
            UpdateHistoryMode.REPLACE)

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("_kobweb-root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    renderComposable(rootElementId = "_kobweb-root") {
        musaib.AppEntry {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
