import type { Categoria, Censura } from '../../types';
import styles from './Tag.module.css';
import classNames from 'classnames';



interface TagProps {
    value: Categoria | Censura
}

const tagClasses = {
    Livre: styles.livre,
    "10 anos": styles.dez,
    "12 anos": styles.doze,
    "14 anos": styles.catorze,
    "16 anos": styles.dezesseis,
    "18 anos": styles.dezoito,
    "2D": styles.doisD,
    "3D": styles.tresD,
};

const Tag = ({value}: TagProps) => {
    const classes = classNames(styles.tag, tagClasses[value]);
    return (
        <span className={classes}>{value}</span>
    )
}

export default Tag;