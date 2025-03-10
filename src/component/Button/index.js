import styles from './Button.module.css'
import clsx from 'clsx'
function Button({primary,secondary ,success,danger,warning}){
    const classes = clsx(styles.btn,{
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning
    })
    return (
        <>
        <button className={classes}>Click me!</button>
        </>
    )
}
export default Button