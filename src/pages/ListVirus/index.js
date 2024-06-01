import { useParams } from "react-router-dom"

import Virus from "../../components/Virus"

export default function ListVirus() {
    const { virusName } = useParams()

    return (
        <div>
            {virusName.length > 0 &&
                <div className="mt-8">
                    <Virus name={virusName} />
                </div>
            }
        </div>
    )
}