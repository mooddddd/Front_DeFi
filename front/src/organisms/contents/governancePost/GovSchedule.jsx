import {Pdata, ProgressBox, ProgressDatas, ProgressIcon, ProgressInfo, ProgressList, ProgressTitle} from "./style";



export const GovSchedule = () => {

    return <>
        <ProgressInfo>
            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>의제 등록 일시</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">2023/07/14 16:32:14</Pdata>
                    <Pdata size="12px" color="#333">0xc0d114598bc3229c9fc67081f3e45100743da48dba71d506c13fa9d76ef84dcb</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>투표시작(3일)</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">2023/07/16 16:34:53</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>1차 가결 판단</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">-</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>TimeLock</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">-</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>최종 반영</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">-</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

        </ProgressInfo>
    </>
}