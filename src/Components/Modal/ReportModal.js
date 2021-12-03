import { Background, Window, Popup } from "./Modal";
import { Text, Submitbutton, Column, Row } from "../shared";
import cancel from '../../images/cancel.png';

const ReportModal = (props) => {
    return (
        <Background>
            <Window>
                <Popup padding='20px'>
                    <Column>
                        <img onClick={ ()=>{ props.setReportModal(false) }} src={cancel} alt='cancel' style={{ cursor: 'pointer', marginLeft: '320px' }}/>
                        <Text>해당 글을 신고하시겠습니까?</Text>
                        <Row>
                            <Submitbutton onClick={ ()=>{ props.setReportModal(false) }} mt='20px' height='40px' width='80px' type="submit" value={"예"}></Submitbutton>
                            <Submitbutton onClick={ ()=>{ props.setReportModal(false) }} mt='20px' height='40px' width='80px' ml='10px' type="submit" value={"아니요"}></Submitbutton>
                        </Row>
                    </Column>
                </Popup>
            </Window>
        </Background>
    );
};

export default ReportModal;