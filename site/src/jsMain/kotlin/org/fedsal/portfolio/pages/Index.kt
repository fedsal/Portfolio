package org.fedsal.portfolio.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.fedsal.portfolio.components.layouts.DefaultPageLayout
import org.fedsal.portfolio.components.sections.about.ui.About
import org.fedsal.portfolio.components.sections.home.ui.Home
import org.fedsal.portfolio.components.sections.projects.ui.Projects
import org.fedsal.portfolio.toSitePalette
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.dom.Text

@Page
@Composable
fun HomePage() {
    DefaultPageLayout("Federico Salgado") {
        Column (
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally
        ){

            val currentPalette = ColorMode.current.toSitePalette()


            Home(currentPalette = currentPalette)

            About()

            Projects()
        }
    }
}
