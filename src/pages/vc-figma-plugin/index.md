---
title: Decreasing Lead Time of Voice Compass Implementation to Production with A Figma Plugin 
date: "2023-03-30"
---

Company: NLX

Business:

Product: Voice Compass Figma Plugin by NLX

<!-- end -->

# Problem
Voice Compass is a platform to create a voice-guided journey that enables companies to enhance customer self-service. In other words, Voice Compass provide features to design a conversation-based service that verbally guides customers through their onscreen journey to complete their mission. You can check more detail about Voice Compass on this page and try the demo to give you a clearer example.

Said that NLX got a new lead, a potential client who wants to use Voice Compass. They try to understand Voice Compass features. After spending time with the Customer Success Team, the client creates the journey flow and screen design. 8 out of 10 NLX customers are using Figma to do this task. While creating the journey, the client wants to know how well the voice assistant works using Voice Compass. Still, it is only possible to know that by finishing setting the journey in Voice Compass.
They also said the client made good progress and was ready to use Voice Compass. However, on the Voice Compass platform, they need to draw the journey again, copy all the text that will be said by the voice assistant for each screen, and copy the design one by one. This process is tedious and redundant.

# Objective
Knowing those two problems, my UX Researcher and me connect with Customer Success Team to dig deeper into this problem. We set the objective for our initial development based on this interview result. The goals will include:
1. Import your designed flow from Figma to Voice Compass in a few steps.
2. Preview audio and visual elements of journeys with a better experience.

# Metrics
1. Lead time to production difference after implementing the plugin.
2. Number of use of the plugin

# Execution
To achieve those objectives above, I defined several steps that comply with MVP to ensure the user gets the benefit as early as possible.
1. Build the front end of the plugin on the Figma side by matching the data structure and types needed in Voice Compass, except for pictures.
2. Embed Voice Compass voice function the Figma plugin.


# Limitation
1. We also want to copy the image design in Figma to Voice Compass, but we have limitations for authentication.
2. To still be able to continuously deliver value to the user even though not 100% perfect, we decided to use copy button that will generate Figma plugin data as JSON and the user will log in manually and paste the copied JSON into Voice Compass to transfer all journey data except for pictures.

# Result
1. Per today, the plugin has been used by 605 people.

# Future Recommendations
1. Implement OAuth so users do not need to input personal access tokens and page links.
2. Direct connection between Figma and Voice Compass.
3. Import into an existing journey in Voice Compass.
4. Partial import based on user selection during the import process.
5. Include images during the import process.
6. Implement flexible scale coordinates in Voice
Compass codebase.