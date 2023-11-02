import PastColorDisplay from "js/components/PastColorDisplay";

function Past() {
    return (
        <div className="past page-padding page-min-height">
            <div className="content">
                <h2>Recent Colors</h2>
                <PastColorDisplay />
            </div>
        </div>
    )
}

export default Past;