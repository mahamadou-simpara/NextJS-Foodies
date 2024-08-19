import style from './loading.module.css'

export default function loading () {
    return <p className={style.loading}>Fetching meals....</p>
}