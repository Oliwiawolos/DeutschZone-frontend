import React from 'react'
import './VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function VerbConjugation() {
  return (
    <>
    <div className="conjugation-container">
      <h1> Verb Conjugation</h1>
      <h3><LooksOneIcon />Regular Verbs</h3>
      <p>Regular verbs conjugated by persons receive different endings. These endings are added to the infinitive stem. The stem is obtained by removing the ending <span className="highlight">-en</span> from the infinitive, and in the case of verbs ending in <span className="highlight">-ern</span> by removing the ending <span className="highlight">-n</span></p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>mach|en</th>
            <th style={{ textAlign: 'center' }}>erinn|ern</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to do</td>
            <td style={{ textAlign: 'center' }}>to remind</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td>mach<span className="red">e</span></td>
            <td>erinner/erinnr<span className="red">e</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td>mach<span className="red">st</span></td>
            <td>erinner/erinner<span className="red">st</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td>mach<span className="red">t</span></td>
            <td>erinner<span className="red">t</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>mach<span className="red">en</span></td>
            <td>erinner<span className="red">n</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>mach<span className="red">t</span></td>
            <td>erinner<span className="red">t</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>mach<span className="red">en</span></td>
            <td>erinner<span className="red">n</span></td>
          </tr>
        </tbody>
        </table>
        </div>
        <p>If the stem of a verb ends in <span className="highlight">-t</span>, <span className="highlight">-d</span>, <span className="highlight">-ffn</span>, <span className="highlight">-chn</span>, or <span className="highlight">-tm</span>, an additional vowel <span className="highlight">-e</span> is added in the 2nd and 3rd person singular and the 2nd person plural to facilitate pronunciation</p>
        <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>arbeit|en</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to work</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td>arbeit<span className="red">e</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td>arbeit<span className="red">est</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td>arbeit<span className="red">et</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>arbeit<span className="red">en</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>arbeit<span className="red">et</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>arbeit<span className="red">en</span></td>
          </tr>
        </tbody>
        </table>
        </div>
        <p>A certain group of verbs loses the ending <span className="highlight">-s</span> in the 2nd person singular. These are verbs with stems ending in <span className="highlight">-s</span>,<span className="highlight">-ß</span>,<span className="highlight">-x</span>,<span className="highlight">-z</span> or <span className="highlight">-tz</span></p>
        <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>heiß|en</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to be called</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td>heiß<span className="red">e</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td>heiß<span className="red">t</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td>heiß<span className="red">t</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>heiß<span className="red">en</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>heiß<span className="red">t</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>heiß<span className="red">en</span></td>
          </tr>
        </tbody>
        </table>
      </div>
      <p>Verbs ending in <span className="highlight">-eln</span> lose the <span className="highlight">-e</span> in the stem when conjugated in the 1st person singular</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>klingel|n</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to call</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td>klingl<span className="red">e</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td>klingl<span className="red">st</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td>klingl<span className="red">t</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>klingl<span className="red">n</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>klingl<span className="red">t</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>klingl<span className="red">n</span></td>
          </tr>
        </tbody>
        </table>
      </div>
      <h3><LooksTwoIcon />Unregular Verbs</h3>
      <p>Verbs with a stem vowel <span className="highlight">-a</span> change to <span className="highlight">-ä</span> in the 2nd and 3rd person singular forms. Verbs that conjugate according to this pattern include: fahren, laufen, schlafen, tragen, waschen, halten and fallen</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>fahr|en</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to drive</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td>fahr<span className="red">e</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td>fähr<span className="red">st</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td>fähr<span className="red">t</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>fahr<span className="red">en</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>fahr<span className="red">t</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>fahr<span className="red">en</span></td>
          </tr>
        </tbody>
        </table>
      </div>
      <p>Verbs with a stem vowel <span className="highlight">-e</span> change to <span className="highlight">-ie</span> in the 2nd and 3rd person singular forms. Verbs that conjugate according to this pattern include: sehen, lesen, empfehlen, stehlen and geschehen</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>seh|en</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to see</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td>seh<span className="red">e</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td>sieh<span className="red">st</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td>sieh<span className="red">t</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>seh<span className="red">en</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>seh<span className="red">t</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>seh<span className="red">en</span></td>
          </tr>
        </tbody>
        </table>
      </div>
      <p>Verbs with a stem vowel <span className="highlight">-e</span> change to <span className="highlight">-i</span> in the 2nd and 3rd person singular forms. Verbs that conjugate according to this pattern include: essen, geben, sprechen, nehmen(here is change from <span className="highlight">-ehm</span> to <span className="highlight">-imm</span>) vergessen, treffen, werfen and helfen</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>nehm|en</th>
            <th style={{ textAlign: 'center' }}>treff|en</th>
          </tr>
          <tr>
            <td  colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to take</td>
            <td style={{ textAlign: 'center' }}>to meet</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td>nehm<span className="red">e</span></td>
            <td>treff<span className="red">e</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td>nimm<span className="red">st</span></td>
            <td>triff<span className="red">st</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td>nimm<span className="red">t</span></td>
            <td>triff<span className="red">t</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>nehm<span className="red">en</span></td>
            <td>treff<span className="red">en</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>nehm<span className="red">t</span></td>
            <td>treff<span className="red">t</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>nehm<span className="red">en</span></td>
            <td>treff<span className="red">en</span></td>
          </tr>
        </tbody>
        </table>
        </div>
        <p>Irregular verbs in German like <span className="highlight">haben</span> and <span className="highlight">sein</span> have unique conjugation patterns that do not follow regular verb rules</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th style={{ textAlign: 'center' }}>haben</th>
            <th style={{ textAlign: 'center' }}>sein</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td style={{ textAlign: 'center' }}>to have</td>
            <td style={{ textAlign: 'center' }}>to be</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3" className="bold">Singular</td> 
            <td>1st person (ich)</td>
            <td>hab<span className="red">e</span></td>
            <td><span className="red">bin</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">hast</span></td>
            <td><span className="red">bist</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">hat</span></td>
            <td><span className="red">ist</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td>hab<span className="red">en</span></td>
            <td><span className="red">sind</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td>hab<span className="red">t</span></td>
            <td><span className="red">seid</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td>hab<span className="red">en</span></td>
            <td><span className="red">sind</span></td>
          </tr>
        </tbody>
        </table>
        </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./verb-test'>
    <p>Regular Verbs</p>
    </Link>
    </div>
    <div className="tests-verb-container3">
    <Link to='./verb-test2'>
    <p>Unregular Verbs</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default VerbConjugation
