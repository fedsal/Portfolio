package org.fedsal.portfolio.components.widgets

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.PointerEvents
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.pointerEvents
import com.varabyte.kobweb.compose.ui.modifiers.position
import org.fedsal.portfolio.components.sections.projects.components.AppearanceAwareImage
import org.jetbrains.compose.web.ExperimentalComposeWebApi
import org.jetbrains.compose.web.css.Position

@OptIn(ExperimentalComposeWebApi::class)
@Composable
fun SVGHeroBackround(
    modifier: Modifier = Modifier,
    dynamicColor: Boolean = false,
    src: String
) {
    AppearanceAwareImage(
        src = src,
        dyanmicColor = dynamicColor,
        modifier = modifier.then(modifier)
            .position(Position.Absolute)
            .pointerEvents(PointerEvents.None)
    )
}