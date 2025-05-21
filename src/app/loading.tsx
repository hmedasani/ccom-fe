import { LoaderCircle } from "lucide-react";

const Loading = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
            }}>
                <LoaderCircle />
                Loading...
            </div>

        </div>
    );
}

export default Loading;