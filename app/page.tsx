/** Add your relevant code here for the issue to reproduce */

import classes from './page.module.css'
import classesNoBom from './page-no-bom.module.css'

export default function Home() {

  return <>
  <div className={classes.red}>Using css module with  UTF8-BOM </div>
  <div className={classesNoBom.red}>Using css module with UTF8</div>
  </>
}
