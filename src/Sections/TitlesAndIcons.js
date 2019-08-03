import React, { Component } from 'react';
import { Link, Element } from 'react-scroll'

import data from '../data.json';
import Fullpage from '../components/Fullpage';
import { SocialIcon } from 'react-social-icons';
import Down from '../components/Down';

import './TitleAndIcons.css';
import Navigation from '../components/Navigation.js';

class TitlesAndIcons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "white"
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState({
            color:this.state.color === "white" ? "yellow":"white"
            
        })
    }
    render() {
        return ([
            <div>
                <Navigation changeColorHandler={this.changeColor} />
            </div>,
            <div>
                <Fullpage className="first" >
                    <h1 className="title" style={{color:this.state.color}}>{data.title} </h1>
                    <div>
                        <h2 style={{color:this.state.color}}>{data.subtitle}</h2>
                    </div>
                    <div className="icons-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icons" key={data.links[key]}>
                                        <SocialIcon  url={data.links[key]} />
                                    </div>
                                );
                            })}
                    </div>
                </Fullpage>
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}>
                    <Down
                        icon={data.icons.down}
                    />
                </Link>
                <Element name="about" className="element"></Element>
            </div>

        ]
        );
    }
}
export default TitlesAndIcons;