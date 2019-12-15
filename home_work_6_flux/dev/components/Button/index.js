import React from 'react';
import styles from './style.scss';

const Button = (props) => {
    const {children, theme = '', type = 'button'} = props;
    const classes = theme.split(' ');
    let cls = 'btn';
    classes.forEach(item => {
        switch (item){
            case 'link_underscored':
                cls += ` ${styles.underscored}`;
                break;
            case 'link':
                cls += ' btn-link';
                break;
            case 'secondary':
                cls += ' btn-secondary';
                break;
            case 'primary':
                cls += ' btn-primary';
                break;
            case 'close':
                cls += ' close';
                break;
            case 'small':
                cls += ` ${styles.small}`
                break;
            default: 
                cls += '';
        }
    });
    

    const newProps = {};
    
    if(props.handleClick){
        newProps.onClick = props.handleClick;
    }
    if(props['data-target']){
        newProps['data-target'] = props['data-target'];
    }
    if(props['data-toggle']){
        newProps['data-toggle'] = props['data-toggle'];
    }
    if(props['data-dismiss']){
        newProps['data-dismiss'] = props['data-dismiss'];
    }
    if(props['aria-label']){
        newProps['aria-label'] = props['aria-label'];
    }

    return (
        type === 'anchor' ? <a href={props.href} className={cls}>{children}</a> :
        <button className={cls} type = {type} {...newProps}>
           {children}
        </button>
    )
}

export default Button;