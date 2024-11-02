import React from 'react'

const SectionWrapper = ({ children, ...props }:any) => (
    <section {...props} className={`py-16 lg:py-20 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper