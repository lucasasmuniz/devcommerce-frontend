import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string,
    onDialogClose: Function,
}

export default function DialogInfo({message, onDialogClose} : Props){

    return(
        <div className="devc-dialog-background" onClick={() => onDialogClose()}>
            <div className="devc-dialog-card" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div onClick={() => onDialogClose()}>
                    <ButtonPrimary text="Ok"/>
                </div>
            </div>
        </div>
    );
}