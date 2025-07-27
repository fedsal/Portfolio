package org.fedsal.portfolio.components.sections.experience

import org.fedsal.portfolio.components.models.WorkExperience

fun getAllWorkExperience() = listOf(
    WorkExperience(
        sequenceNumber = "01",
        role = "Software Developer Intern",
        organization = "IONAGE",
        duration = "July 23 - Present"
    ),
    WorkExperience(
        sequenceNumber = "02",
        role = "Software Developer Intern",
        organization = "Humara Nagar",
        duration = "Jan 23 - Mar 23"
    ),
    WorkExperience(
        sequenceNumber = "03",
        role = "Software Developer Intern",
        organization = "Edvora",
        duration = "Oct 22 - Nov 22"
    )
)