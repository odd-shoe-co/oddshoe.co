# Discovery & Strategy for Odd Shoe Co.

This document captures the output of the initial discovery phase for the Odd Shoe Co. project. It outlines the core business, user, and technical strategies that will guide the initial development sprints.

## 1. Mission Statement

To build a modern, attractive, and sustainable platform that connects individuals in need of a single shoe with the opposite shoe from the same pair. We aim to reduce waste in the footwear industry, provide significant savings and convenience to our users, and create a community around a shared need, starting with a focus on orthopedic patients.

## 2. Description of the Service

Odd Shoe Co. is a specialized e-commerce platform operating on a unique two-sided model:

*   **The Core Service:** We facilitate the purchase of new pairs of shoes for users who only need one. The user receives their required shoe, and the "orphan" shoe is held in our inventory.
*   **The Marketplace:** This inventory of single, "orphan" shoes is then made available for purchase at a significant discount to other users who need that specific shoe.

Our initial go-to-market strategy is to partner with orthopedic offices to reach patients with a temporary, intermittent need for a single shoe, which represents a large, underserved market.

## 3. Primary Revenue Drivers

The business model is a commission-based e-commerce system:

1.  A **Primary Purchaser** buys a full pair of shoes through our platform, likely via an integration with a major retailer like Zappos for our MVP. They pay the full price.
2.  We fulfill the order, sending the single needed shoe to the Primary Purchaser and placing the other shoe (the "Orphan Shoe") into our inventory. The Primary Purchaser is credited with this shoe in escrow.
3.  A **Secondary Purchaser** buys the Orphan Shoe from our inventory at a discount (e.g., 50-70% of the pair's retail price).
4.  Upon the sale of the Orphan Shoe, the original Primary Purchaser receives a cash-back credit, and Odd Shoe Co. takes a commission/fee for facilitating the entire process.

Initially, the company will carry the overhead of storing and managing the inventory of Orphan Shoes.

## 4. User Personas

We have two core user personas:

*   **Primary Purchaser:**
    *   **Motivation:** Their primary driver is the convenience and sustainability of the service. They avoid the hassle of trying to sell an unused shoe themselves and appreciate contributing to a system that helps others and reduces waste. The future cash-back credit is a secondary benefit, not the main incentive.
    *   **Journey:** They come to our site, select any shoe they want from our catalog, purchase the full pair, and receive their single shoe.

*   **Secondary Purchaser:**
    *   **Motivation:** Their primary driver is value and availability. They need a single shoe and can get it from us at a significant discount.
    *   **Journey:** They are limited to our existing inventory of Orphan Shoes. Their experience is about searching, filtering, and finding a match for their specific need. We anticipate that many Secondary Purchasers will be converted into Primary Purchasers when they cannot find their desired shoe in our inventory.

## 5. Technology Strategy

Our technology choices are guided by the principles of high SEO value, low tech-debt, and modern development practices.

*   **Frontend:** **Nuxt.js** (Vue 3) for its excellent Server-Side Rendering (SSR) capabilities, which are critical for SEO.
*   **Backend:** **Spring Boot** (using Kotlin) for its robust, mature, and scalable ecosystem.
*   **Package Management:** **Yarn** for the frontend and **Gradle** for the backend.
*   **Development Methodology:** We will strictly adhere to a test-first approach:
    1.  **Behavior-Driven Development (BDD):** Define features with Gherkin scenarios before implementation.
    2.  **Test-Driven Development (TDD):** Write failing tests before writing code (Red-Green-Refactor).
    3.  **Domain-Driven Design (DDD):** Establish and use a Ubiquitous Language to model the business domain accurately.

## 6. High-Level Goals & Priorities

1.  **High SEO Value:** Stake our claim to the "Odd Shoe Co." name and related search terms.
2.  **Clear User Proposition:** Ensure visitors immediately understand the service we offer.
3.  **Modern & Interactive UI:** Take inspiration from clean, simple, and attractive sites like apple.com.
4.  **Technical Excellence:** Maintain high code quality through our BDD/TDD/DDD approach.
5.  **Automation First:** Start with local-first automation and build towards a full CI/CD pipeline.
