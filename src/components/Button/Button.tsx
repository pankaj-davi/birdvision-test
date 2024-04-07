import { memo } from 'react';
import styles from './button.module.scss'

interface ButtonProps{
    children : React.ReactNode,
    onClick? : ()=> void 
    disabled? : boolean
}

const Button = ({ onClick , disabled , children }: ButtonProps) => <button disabled={disabled || false} onClick={onClick} className={styles.btn_primary}>{children}</button>


export default memo(Button);