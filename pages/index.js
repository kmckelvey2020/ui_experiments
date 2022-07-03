import Head from 'next/head'
import Link from 'next/link';

import styles from './index.module.css'
import handleOnChange from '@/src/helper_functions/handleOnChange';
import handleOnClick from '@/src/helper_functions/handleOnClick';
import FormInput from '@/src/components/ui/form_input';
import Button from '@/src/components/ui/button';
import Card from '@/src/components/ui/card';
import TextArea from '@/src/components/ui/text_area';
import Radio from '@/src/components/ui/radio';
import Select from '@/src/components/ui/select';
import Checkbox from '@/src/components/ui/checkbox';
import CarouselBasic from '@/src/components/carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UI Experiments</title>
        <meta name="description" content="Elements that I use when designing a layout" />
      </Head>
      <main className={styles.main}>
        <h1>Learning to Program Gamified</h1>
        <section>
            <a href="https://cssgridgarden.com/">CSS Grid Garden</a>
            <a href="https://codepip.com/games/flexbox-froggy/">Flexbox Froggy</a>
            <a href="https://flukeout.github.io/">CSS Diner</a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </section>
        <h1>Themes</h1>
        <section className={ styles.themes }>
            <ul>
                <li><Link href="/theme1"><a className={ styles.theme_link }>Theme 1</a></Link></li>
                <li><Link href="/"><a className={ styles.theme_link }>Page 1</a></Link></li>
                <li><Link href="/"><a className={ styles.theme_link }>Page 2</a></Link></li>
                <li><Link href="/"><a className={ styles.theme_link }>Page 3</a></Link></li>
                <li><Link href="/"><a className={ styles.theme_link }>Page 4</a></Link></li>
            </ul>
        </section>
        <h1>Fonts</h1>
        <section className={ styles.fonts }>
            <Card class_name="card white"><h1 className='arial'>Arial*</h1><p className='century'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='century'>Century</h1><p className='century'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='georgia'>Georgia*</h1><p className='century'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='lucida'>Lucida*</h1><p className='century'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='macondo'>Macondo</h1><p className='macondo'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='meow'>Meow Script</h1><p className='meow'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='merriweather'>Merriweather</h1><p className='merriweather'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='nixie'>Nixie One</h1><p className='nixie'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='open'>Open Sans*</h1><p className='open'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='oswald'>Oswald</h1><p className='oswald'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='patrick'>Patrick Hand</h1><p className='patrick'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='press'>Press Start 2P</h1><p className='press'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='roboto'>Roboto*</h1><p className='roboto'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='source'>Source Code Pro</h1><p className='source'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='special'>Special Elite</h1><p className='special'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='tahoma'>Tahoma*</h1><p className='century'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='ubuntu'>Ubuntu</h1><p className='ubuntu'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='uni'>UnifrakturM</h1><p className='uni'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
            <Card class_name="card white"><h1 className='verdana'>Verdana*</h1><p className='century'>The quick brown fox jumps<br/> over the lazy dog.</p></Card>
        </section>
        <h1>Inputs</h1>
        <section className={ styles.inputs }>
            <Select 
                errormessage=""
                id="select"
                key="select" 
                label="Select"
                name="select"
                onChange={ handleOnChange }
                options={ ["Option 1", "Option 2", "Option 3", "Option 4"] }
                value="select"
            />
            <Checkbox 
                errormessage=""
                id="checkbox"
                key="checkbox" 
                label="Checkbox"
                name="checkbox"
                onChange={ handleOnChange }
                type="checkbox"
                value="checkbox"
            />
            <Radio 
                errormessage=""
                id="radio"
                key="radio" 
                label="Radio"
                labels={ ["Yes", "No"] }
                name="radio"
                onChange={ handleOnChange }
                type="radio"
                value="radio"
                values={ [true, false] }
            />
            <FormInput 
                errormessage=""
                id="text"
                key="text" 
                label="Text"
                name="text"
                onChange={ handleOnChange }
                pattern=""
                placeholder="Text..."
                type="text"
                value="Text"
            />
            <TextArea 
                errormessage=""
                id="textarea"
                key="textarea" 
                label="Textarea"
                name="textarea"
                onChange={ handleOnChange }
                pattern=""
                placeholder="Textarea..."
                value="Textarea"
            />
        </section>
        <section>
            <h1>Carousels</h1>
            <CarouselBasic />
        </section>
        <h1>Buttons</h1>
        <section className={ styles.buttons }>
            <Button
                class_name="button blend23 button1 white_text"
                key="buttonA" 
                id="buttonA"
                label="Button A"
                name="buttonA"
                onClick={ handleOnClick }
                value="buttonA" 
            />
            <Button
                class_name="button blend20 button10 white_text"
                key="buttonB" 
                id="buttonB"
                label="Button B"
                name="buttonB"
                onClick={ handleOnClick }
                value="buttonB" 
            />
            <Button
                class_name="button blend26 button4 black_text"
                key="buttonC" 
                id="buttonC"
                label="Button C"
                name="buttonC"
                onClick={ handleOnClick }
                value="buttonC" 
            />
            <Button
                class_name="button darkolivegreen button2 white_text"
                key="buttonD" 
                id="buttonD"
                label="Button D"
                name="buttonD"
                onClick={ handleOnClick }
                value="buttonD" 
            />
            <Button
                class_name="button lightmustard button3 white_text"
                key="buttonE" 
                id="buttonE"
                label="Button E"
                name="buttonE"
                onClick={ handleOnClick }
                value="buttonE" 
            />
            <Button
                class_name="button blend22 button5 white_text"
                key="buttonF" 
                id="buttonF"
                label="Button F"
                name="buttonF"
                onClick={ handleOnClick }
                value="buttonF" 
            />
            <Button
                class_name="button lightdustyblue button8 white_text"
                key="buttonG" 
                id="buttonG"
                label="Button G"
                name="buttonG"
                onClick={ handleOnClick }
                value="buttonG" 
            />
            <Button
                class_name="button darkrose button9 white_text"
                key="buttonH" 
                id="buttonH"
                label="Button H"
                name="buttonH"
                onClick={ handleOnClick }
                value="buttonH" 
            />
            <Button
                class_name="button black button6 white_text"
                key="buttonI" 
                id="buttonI"
                label="Button I"
                name="buttonI"
                onClick={ handleOnClick }
                value="buttonI" 
            />
            <Button
                class_name="button cream button7 black_text"
                key="buttonJ" 
                id="buttonJ"
                label="Button J"
                name="buttonJ"
                onClick={ handleOnClick }
                value="buttonJ" 
            />
            <Button
                class_name="button white button11 black_text"
                key="buttonK" 
                id="buttonK"
                label="Button K"
                name="buttonK"
                onClick={ handleOnClick }
                value="buttonK" 
            />
            <Button
                class_name="button red button12 white_text"
                key="buttonL" 
                id="buttonL"
                label="Button L"
                name="buttonL"
                onClick={ handleOnClick }
                value="buttonL" 
            />
            <Button
                class_name="button blue button13 white_text"
                key="buttonM" 
                id="buttonM"
                label="Button M"
                name="buttonM"
                onClick={ handleOnClick }
                value="buttonM" 
            />
            <Button
                class_name="button indigo button14 white_text"
                key="buttonN" 
                id="buttonN"
                label="Button N"
                name="buttonN"
                onClick={ handleOnClick }
                value="buttonN" 
            />
        </section>
        <h1>Light Themes</h1>      
        <div className={ styles.lightthemes }>   
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card mustard"><h2>mustard</h2></Card>
              <Card class_name="card darkdustyblue"><h1>darkdustyblue</h1></Card>
              <Card class_name="card blend1"><h1>blend1</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card darkmustard"><h2>dark mustard</h2></Card>
              <Card class_name="card darkblue"><h1>darkblue</h1></Card>
              <Card class_name="card blend2"><h1>blend2</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card rose"><h2>rose</h2></Card>
              <Card class_name="card darkmustard"><h1>darkmustard</h1></Card>
              <Card class_name="card blend3"><h1>blend3</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightrose"><h3>lightrose</h3></Card>
              <Card class_name="card lightbrown"><h2>lightbrown</h2></Card>
              <Card class_name="card darkrose"><h1>darkrose</h1></Card>
              <Card class_name="card blend4"><h1>blend4</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightgray"><h3>lightgray</h3></Card>
              <Card class_name="card violet"><h2>violet</h2></Card>
              <Card class_name="card brown"><h1>brown</h1></Card>
              <Card class_name="card blend5"><h1>blend5</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightslategray"><h3>lightslategray</h3></Card>
              <Card class_name="card gray"><h2>gray</h2></Card>
              <Card class_name="card darkviolet"><h1>darkviolet</h1></Card>
              <Card class_name="card blend6"><h1>blend6</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightdustyblue"><h3>lightdustyblue</h3></Card>
              <Card class_name="card slategray"><h2>slategray</h2></Card>
              <Card class_name="card darkgray"><h1>darkgray</h1></Card>
              <Card class_name="card blend7"><h1>blend7</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card slategray"><h2>slategray</h2></Card>
              <Card class_name="card darkgreen"><h1>darkgreen</h1></Card>
              <Card class_name="card blend8"><h1>blend8</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightolivegreen"><h3>lightolivegreen</h3></Card>
              <Card class_name="card dustyblue"><h2>dustyblue</h2></Card>
              <Card class_name="card darkslategray"><h1>darkslategray</h1></Card>
              <Card class_name="card blend9"><h1>blend9</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightbrown"><h3>lightbrown</h3></Card>
              <Card class_name="card lightolivegreen"><h2>lightolivegreen</h2></Card>
              <Card class_name="card brown"><h1>brown</h1></Card>
              <Card class_name="card blend10"><h1>blend10</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card violet"><h2>violet</h2></Card>
              <Card class_name="card darkdustyblue"><h1>darkdustyblue</h1></Card>
              <Card class_name="card blend11"><h1>blend11</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightgray"><h3>lightgray</h3></Card>
              <Card class_name="card slategray"><h2>slategray</h2></Card>
              <Card class_name="card darkblue"><h1>darkblue</h1></Card>
              <Card class_name="card blend12"><h1>blend12</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card darkaqua"><h2>darkaqua</h2></Card>
              <Card class_name="card darkblue"><h1>darkblue</h1></Card>
              <Card class_name="card blend13"><h1>blend13</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightgray"><h3>lightgray</h3></Card>
              <Card class_name="card darkaqua"><h2>darkaqua</h2></Card>
              <Card class_name="card darkred"><h1>darkred</h1></Card>
              <Card class_name="card blend14"><h1>blend14</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card rose"><h2>rose</h2></Card>
              <Card class_name="card darkred"><h1>darkred</h1></Card>
              <Card class_name="card blend15"><h1>blend15</h1></Card>
          </section>
        </div>
        <h1>Monochromatic Themes</h1>      
        <div className={ styles.monochromaticthemes }>
          <section className={ styles.cards }>
              <Card class_name="card white"><h3>white</h3></Card>
              <Card class_name="card lightgray"><h2>lightgray</h2></Card>
              <Card class_name="card black"><h1>black</h1></Card>
              <Card class_name="card blend16"><h1>blend16</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightmustard"><h3>lightmustard</h3></Card>
              <Card class_name="card mustard"><h2>mustard</h2></Card>
              <Card class_name="card darkmustard"><h1>darkmustard</h1></Card>
              <Card class_name="card blend17"><h1>blend17</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightrose"><h3>lightrose</h3></Card>
              <Card class_name="card rose"><h2>rose</h2></Card>
              <Card class_name="card darkrose"><h1>darkrose</h1></Card>
              <Card class_name="card blend18"><h1>blend18</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card cream"><h3>cream</h3></Card>
              <Card class_name="card lightbrown"><h2>lightbrown</h2></Card>
              <Card class_name="card brown"><h1>brown</h1></Card>
              <Card class_name="card blend19"><h1>blend19</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightviolet"><h3>lightviolet</h3></Card>
              <Card class_name="card violet"><h2>violet</h2></Card>
              <Card class_name="card darkviolet"><h1>darkviolet</h1></Card>
              <Card class_name="card blend20"><h1>blend20</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightgray"><h3>lightgray</h3></Card>
              <Card class_name="card gray"><h2>gray</h2></Card>
              <Card class_name="card darkgray"><h1>darkgray</h1></Card>
              <Card class_name="card blend21"><h1>blend21</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightslategray"><h3>lightslategray</h3></Card>
              <Card class_name="card slategray"><h2>slategray</h2></Card>
              <Card class_name="card darkslategray"><h1>darkslategray</h1></Card>
              <Card class_name="card blend22"><h1>blend22</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightdustyblue"><h3>lightdustyblue</h3></Card>
              <Card class_name="card dustyblue"><h2>dustyblue</h2></Card>
              <Card class_name="card darkdustyblue"><h1>darkdustyblue</h1></Card>
              <Card class_name="card blend23"><h1>blend23</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card lightolivegreen"><h3>lightolivegreen</h3></Card>
              <Card class_name="card olivegreen"><h2>olivegreen</h2></Card>
              <Card class_name="card darkolivegreen"><h1>darkolivegreen</h1></Card>
              <Card class_name="card blend24"><h1>blend24</h1></Card>
          </section>
        </div>
        <h1>Dark Themes Soft</h1>
        <div className={ styles.darkthemessoft }>
          <section className={ styles.cards }>
              <Card class_name="card_dark white"><h3>white</h3></Card>
              <Card class_name="card_dark lightgray"><h2>lightgray</h2></Card>
              <Card class_name="card_dark cream"><h1>cream</h1></Card>
              <Card class_name="card_dark blend25"><h1>blend25</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark white"><h3>white</h3></Card>
              <Card class_name="card_dark cream"><h2>cream</h2></Card>
              <Card class_name="card_dark lightrose"><h1>lightrose</h1></Card>
              <Card class_name="card_dark blend26"><h1>blend26</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark white"><h3>white</h3></Card>
              <Card class_name="card_dark lightgray"><h2>lightgray</h2></Card>
              <Card class_name="card_dark lightdustyblue"><h1>lightdustyblue</h1></Card>
              <Card class_name="card_dark blend27"><h1>blend27</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark white"><h3>white</h3></Card>
              <Card class_name="card_dark cream"><h2>cream</h2></Card>
              <Card class_name="card_dark lightmustard"><h1>lightmustard</h1></Card>
              <Card class_name="card_dark blend28"><h1>blend28</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark white"><h3>white</h3></Card>
              <Card class_name="card_dark cream"><h2>cream</h2></Card>
              <Card class_name="card_dark lightolivegreen"><h1>lightolivegreen</h1></Card>
              <Card class_name="card_dark blend29"><h1>blend29</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark white"><h3>white</h3></Card>
              <Card class_name="card_dark cream"><h2>cream</h2></Card>
              <Card class_name="card_dark lightbrown"><h1>lightbrown</h1></Card>
              <Card class_name="card_dark blend30"><h1>blend30</h1></Card>
          </section>
        </div>
        <h1>Dark Themes Bright</h1>
        <div className={ styles.darkthemesbright }>
          <section className={ styles.cards }>
              <Card class_name="card_dark red"><h3>red</h3></Card>
              <Card class_name="card_dark orange"><h2>orange</h2></Card>
              <Card class_name="card_dark yellow"><h1>yellow</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark orange"><h3>orange</h3></Card>
              <Card class_name="card_dark yellow"><h2>yellow</h2></Card>
              <Card class_name="card_dark green"><h1>green</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark yellow"><h3>yellow</h3></Card>
              <Card class_name="card_dark green"><h2>green</h2></Card>
              <Card class_name="card_dark aqua"><h1>aqua</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark green"><h3>green</h3></Card>
              <Card class_name="card_dark aqua"><h2>aqua</h2></Card>
              <Card class_name="card_dark blue"><h1>blue</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark aqua"><h3>aqua</h3></Card>
              <Card class_name="card_dark blue"><h2>blue</h2></Card>
              <Card class_name="card_dark indigo"><h1>indigo</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark blue"><h3>blue</h3></Card>
              <Card class_name="card_dark indigo"><h2>indigo</h2></Card>
              <Card class_name="card_dark purple"><h1>purple</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark indigo"><h3>indigo</h3></Card>
              <Card class_name="card_dark purple"><h2>purple</h2></Card>
              <Card class_name="card_dark pink"><h1>pink</h1></Card>
          </section>
          <section className={ styles.cards }>
              <Card class_name="card_dark aqua"><h3>aqua</h3></Card>
              <Card class_name="card_dark green"><h2>green</h2></Card>
              <Card class_name="card_dark hotpink"><h1>hotpink</h1></Card>
          </section>
        </div>
      </main>
    </div>
  )
}
