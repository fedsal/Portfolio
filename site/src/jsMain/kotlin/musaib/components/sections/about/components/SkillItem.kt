package musaib.components.sections.about.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.jetbrains.compose.web.css.cssRem
import musaib.components.models.Skill
import musaib.components.sections.about.style.SkillItemImageVariant
import musaib.components.styles.SkillProficiencyTextStyle
import musaib.components.styles.SkillTextStyle

@Composable
fun SkillItem(
    skill: Skill,
    colorMode: ColorMode = ColorMode.current,
    modifier: Modifier = Modifier,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
) {
    Row(
        modifier = modifier,
        horizontalArrangement = horizontalArrangement,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Image(
            src = if (colorMode.isLight) skill.iconResLight else skill.iconResDark,
            variant = SkillItemImageVariant,
        )
        Column(
            modifier = Modifier.margin(left = 0.75.cssRem),
            horizontalAlignment = Alignment.Start,
            verticalArrangement = Arrangement.SpaceBetween
        ) {

            SpanText(
                text = skill.skillName,
                modifier = SkillTextStyle.toModifier()
            )
            SpanText(
                text = skill.level,
                modifier = SkillProficiencyTextStyle.toModifier()
                    .color(
                    when (ColorMode.current) {
                        ColorMode.LIGHT -> Colors.Gray
                        ColorMode.DARK -> Colors.LightGray
                    }
                )
            )
        }
    }
}