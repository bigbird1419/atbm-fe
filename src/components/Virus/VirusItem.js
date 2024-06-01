import Button from "../Button";

export default function VirusItem({ data }) {
    return (
        <Button to={`/virus/${data.id}`} className={'block'}>
            {Object.keys(data).length > 0 &&
                <div className="relative p-4 hover:bg-colorGray">
                    <h1 className="text-colorPrimary text-lg font-medium">{data.name}</h1>
                    <p>{data.description}</p>
                    <p className="absolute top-1 right-1 flex justify-center items-center h-10 w-10 text-sm bg-colorPrimaryThin rounded-full">{data.score}</p>
                </div>
            }
        </Button>
    )
}