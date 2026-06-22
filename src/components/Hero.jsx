import React from 'react';
import {ArrowRight, Play} from 'lucide-react';
import Underline from './Underline';

export default function Hero() {
    return (
        <div className="hero-container">
            <section className="hero" id="hero">
                <div className="hero-grid-bg"></div>
                <div className="hero-glow"></div>
                <div className="hero-wrap">
                    <div className="hero-left">

                        <h1 className="hero-h1">
                            Learn in the AM,<br/>
                            <Underline>excel in the PM</Underline>
                        </h1>

                        <p className="hero-sub">
                            Expert tutoring for OC and Selective by high school students across Sydney.
                        </p>

                        <div className="hero-btns">
                            {/* TODO: Add the actual link dont forget rememeber */}
                            <a href="#" className="btn-primary">
                                Book a trial lesson
                                <ArrowRight size={18}/>
                            </a>
                            {/* Once again, TODO: add real link */}
                            <a href="#" className="btn-ghost-white">
                                <Play size={18}/>
                                Explore Programs
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}