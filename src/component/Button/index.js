import styles from './Button.module.scss'
import clsx from 'clsx'
function Button({primary,secondary ,success,danger,warning,disabled}){
    const classes = clsx(styles.btn,{
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
        [styles.disabled]: disabled
    })
    return (
        <>
        <button className={classes}>Click me!</button>
        </>
    )
}
export default Button