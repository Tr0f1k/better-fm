import React from 'react'
import './styles/About.css'

function About () {
    return (
        <div>
            <h2 className='top'>About this project:</h2>
            <p>
                In 2017, I was playing Football Manager with a couple of my friends in Eredivisie.
                Over time, we got a little bit used to it and we decided to come up with some ways to make it more interesting.
                When we were playing against each other in the league, we would open a website with a "Wheel of Fortune", in which we would write some weird challenges for us.
                For example, put your goalkeeper on striker, do not make any substitutions during a match and so on.
                I have decided to create an app dedicated to creating such interesting challenges for your Football Manager Careers!
            </p>
            <h2 className='top'>About contributors:</h2>
            <div className='aboutBox'>
                <div className='aboutItem'>
                    <img src={require('./images/about/Misha.jpg')} className='aboutImage' />
                    <h3>Mihail Trofimov</h3>
                    <h4>Full-Stack Development</h4>
                    <p>Computer Science student with a big passion for football and gaming</p>
                </div>
                <div className='aboutItem'>
                    <img src={require('./images/about/Valera.jpg')} className='aboutImage' />
                    <h3>Valeriu Botnar</h3>
                    <h4>Creative Mastermind</h4>
                    <p>Came up with most of challenges in random challenge section. You'll Never Walk Alone!</p>
                </div>
            </div>
        </div>
    );
}

export default About