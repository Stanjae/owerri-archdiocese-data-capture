import React from "react"
import SectionWrapper from "../Clientwrappers/SectionWrapper"

const CenteredCTAText = () => {
    return (
        <SectionWrapper>
            <div className="custom-screen text-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-foreground text-3xl font-semibold sm:text-4xl">
                        We help you get more website traffic to your site.
                    </h2>
                    <p className="mt-3 text-foreground/60">
                        Split brings you the freshest, up-to-date website traffic trends. An easy way to find out the most popular and engaging content to help you grow.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CenteredCTAText