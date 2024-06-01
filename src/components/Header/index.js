import Button from "../Button";
import Search from "../Search";
import logo from '../../assets/icon.png'

export default function Header() {

    return (
        <div className="wrapper">
            <div className="flex justify-around items-center">
                <div className="w-4/5">
                    <div className="w-full flex items-center">
                        <div className="mr-4">
                            <Button to={'/'}>
                                <img src={logo} alt="" className="w-10 h-auto object-contain" />
                            </Button>
                        </div>
                        <div className="flex-auto">
                            <Search />
                        </div>
                    </div>
                </div>
                <div className="w-1/5 ml-10">
                    <div>
                        <Button to={'/admin'} className={'block bg-colorPrimaryThin text-center px-4 py-1 rounded-full font-medium text-white text-sm'}>
                            Thêm nội dung
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}