import React from 'react'
import './About.css'
export default function About(props) {
    return (
      <>  
        <div class="container"style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}>
        <header>
            <h1>About TextAlchemy</h1>
        </header>
        <section style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Our Mission</h2>
            <p>At TextAlchemy, we are committed to revolutionizing the way you handle text. Our mission is to provide innovative, user-friendly tools that simplify complex text manipulation tasks, making them accessible to everyone.</p>
        </section>
        <section style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>What We Offer</h2>
            <ul>
                <li><strong>Text Formatting:</strong> Effortlessly format text into headings, paragraphs, lists, and more.</li>
                <li><strong>Data Transformation:</strong> Decode, encode, and transform data formats such as JSON, XML, CSV, and more.</li>
                <li><strong>Snippet Generation:</strong> Generate code snippets, lorem ipsum text, and customizable templates quickly and efficiently.</li>
            </ul>
        </section>
        <section style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Why Choose TextAlchemy?</h2>
            <ul>
                <li>User-Centric Design: Our intuitive interface ensures a seamless user experience, allowing you to achieve desired results in seconds.</li>
                <li>Reliable Performance: Trust TextAlchemy for consistent, reliable performance in handling text processing tasks.</li>
                <li>Innovative Solutions: Stay ahead with our continuous updates and new features designed to meet evolving text manipulation needs.</li>
            </ul>
        </section>
        <section style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Open Source Commitment</h2>
            <p>TextAlchemy is committed to transparency and collaboration. We believe in the power of open source software to foster innovation and community-driven development. That's why we provide access to the source code of our tools, encouraging developers to contribute, customize, and improve TextAlchemy for everyone.</p>
        </section>
        <section style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Get Started Today</h2>
            <p>Join thousands of satisfied users who rely on TextAlchemy for their text manipulation needs. Discover the power of efficient text processing – explore our tools and transform the way you work with text.</p>
        </section>
    </div>
    </>
    )
}
