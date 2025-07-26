package org.fedsal.portfolio.components.sections.projects.components

import org.fedsal.portfolio.components.utils.Res
import org.fedsal.portfolio.components.utils.Res.Constants

fun getAllProjects() =
    listOf(
        Pair(Res.Images.SIMPLE_FINANCE, Constants.SIMPLE_FINANCE_URL),
        Pair(Res.Images.PROJECT_RETAIL_STORE, Constants.RETAIL_STORE_URL),
        Pair(Res.Images.PROJECT_ON_FIT, Constants.ON_FIT_URL),
        Pair(Res.Images.PROJECT_NEWS_APP, Constants.NEWS_APP_URL),
    )