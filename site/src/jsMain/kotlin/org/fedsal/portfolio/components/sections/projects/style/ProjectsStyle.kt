package org.fedsal.portfolio.components.sections.projects.style

import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.topBottom
import com.varabyte.kobweb.silk.style.extendedBy
import org.fedsal.portfolio.components.styles.SectionContainerStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.keywords.auto

val ProjectsStyle = SectionContainerStyle.extendedBy {

    base {
        Modifier
            .fillMaxWidth()
            .height(auto)
            .padding { topBottom(10.cssRem) }

    }

}