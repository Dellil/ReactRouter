import React, { useEffect } from "react";

function HistorySample({ history }) {
    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push("/");
    };

    useEffect(() => {
        const unblock = history.block("어이어이 마지까요?");

        return () => {
            unblock();
        };
    }, [history]);
    return (
        <div>
            <button onClick={goBack}>뒤로가긔</button>
            <button onClick={goHome}>호므로</button>
        </div>
    );
}

export default HistorySample;
