import './Modal.css'
import { CSSProperties, useEffect, useState} from "react";

type FunctionalComponent = JSX.Element | JSX.Element[] | ((props: any) => JSX.Element);


interface ChildrenProps {
    elementTrigger?: FunctionalComponent;
    body: FunctionalComponent;
    header?: FunctionalComponent;
    footer?: FunctionalComponent;
}

export type SizeModal = 'sm' | 'md' | 'lg';

interface ModalProps {
    children: ChildrenProps | FunctionalComponent;
    onAccept?: () => void;
    onCancel?: () => void;
    buttonStyle?: CSSProperties;
    showButtonsFooter?: boolean;
    textButtonAccept?: string;
    textButtonCancel?: string;
    textButtonTrigger?: string;
    size?: SizeModal;
}


export const Modal = (
    {
        children,
        size = 'md',
        onCancel,
        onAccept,
        buttonStyle,
        showButtonsFooter = true,
        textButtonAccept = 'Aceptar',
        textButtonCancel = 'Cancelar',
        textButtonTrigger = 'Abrir',
    }: ModalProps) => {


    const [show, setShow] = useState<boolean>(false)

    const showModal = () => {
        setShow(true);
    }
    const hideModal = () => {
        setShow(false);
    }

    const accept = () => {
        if (onAccept) onAccept();
        hideModal();
    }
    const cancel = () => {
        if (onCancel) onCancel();
        hideModal();
    }
    const handleKeyBoard = (event: KeyboardEvent) => {
        event.preventDefault();
        if (event.code === 'Escape') cancel();
        if (event.code === 'Enter') accept();
        if (event.code === 'Space') cancel();
    }

    useEffect(() => {
        if (show) {
            window.addEventListener('keydown', handleKeyBoard);
        } else {
            window.removeEventListener('keydown', handleKeyBoard)
        }
        return () => {
            window.removeEventListener('keydown', handleKeyBoard)
        };
    }, [show])


    const renderComponentTrigger = () => {
        return "elementTrigger" in children && children.elementTrigger ?
            <div onClick={() => showModal()} style={buttonStyle}>
                {children.elementTrigger}
            </div>
            :
            <button onClick={() => showModal()} style={buttonStyle}>{textButtonTrigger}</button>
    }

    const renderComponentHeader = () => {
        return (
            <div className="custom-modal-header">
                <div className="custom-modal-header-left">
                    {"header" in children && children.header ? children.header : ''}
                </div>
                <div className="custom-modal-header-right">
                    <div className={'custom-modal-actions'}>
                        <span onClick={() => cancel()}>X</span>
                    </div>
                </div>
            </div>
        )
    }

    const renderComponentBody = () => {
        return (
            <div className="custom-modal-body">
                {"body" in children ? children.body : children}
            </div>
        );
    }

    const renderComponentFooter = () => {
        return (
            <div className="custom-modal-footer">
                {"footer" in children ? children.footer : ''}
            </div>
        );
    }

    const renderComponentButtons = () => {
        return showButtonsFooter && (<div className="btns-custom-modal">
            <button onClick={() => accept()} className={'btn btn-secondary'}>{textButtonCancel}</button>
            <button onClick={() => cancel()} className={'btn btn-primary'}>{textButtonAccept}</button>
        </div>)
    }

    const getWidth =  (): CSSProperties => {
        let width = '40%'
        let left = '30%';
        if (size === 'md') {
            width = '40%';
            left = '30%';
        }
        if (size === 'sm') {
            width = '20%';
            left = '40%';
        }
        if (size === 'lg') {
            width = '60%';
            left = '20%';
        }
        return {width, left}
    }
    return (
        <>
            {renderComponentTrigger()}
            {show && <div id="overlay-custom-modal">
                <div style={getWidth()} className="custom-modal" onClick={() => null}>
                    {renderComponentHeader()}
                    {renderComponentBody()}
                    {renderComponentFooter()}
                    {renderComponentButtons()}
                </div>
            </div>
            }</>
    );

}