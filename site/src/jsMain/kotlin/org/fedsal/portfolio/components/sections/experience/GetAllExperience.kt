package org.fedsal.portfolio.components.sections.experience

import org.fedsal.portfolio.components.models.WorkExperience

fun getAllWorkExperience() = listOf(
    WorkExperience(
        sequenceNumber = "01",
        role = "Software Developer",
        organization = "Mercado libre",
        duration = "March 21 - May 2023"
    ),
    WorkExperience(
        sequenceNumber = "02",
        role = "Software Engineer",
        organization = "Global Logic",
        duration = "May 2023 - Present"
    ),
)