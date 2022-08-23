import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2>Find a better card deal <br className="sm:block hidden" /> in a few easy steps</h2>
            <p> Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
        </div>
    </section>
)

export default CardDeal