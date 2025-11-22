import React from 'react'
import { LuClipboardPenLine } from "react-icons/lu";
import { LuLock } from "react-icons/lu";
import { LuCloudy } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuFolders } from "react-icons/lu";
import { LuToggleRight } from "react-icons/lu";
import { PiNumberCircleFourFill, PiNumberCircleOneFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill, PiNumberCircleZeroFill } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { PiPlusBold } from "react-icons/pi";









const AllIcons = {
    clipboard: LuClipboardPenLine,
    lock: LuLock,
    cloud: LuCloudy,
    search: LuSearch,
    folders: LuFolders,
    toggle: LuToggleRight,
    zero: PiNumberCircleZeroFill,
    one: PiNumberCircleOneFill,
    two: PiNumberCircleTwoFill,
    three: PiNumberCircleThreeFill,
    four: PiNumberCircleFourFill,
    check: FaCheck,
    plus: PiPlusBold,
    


}

const BasicIcons = ({ icon = 'clipboard', className='text-4xl' }) => {
    const Icon = AllIcons[icon] || LuClipboardPenLine;
    return (
        <div className={`${className}`}>
            <Icon />
        </div>
    )
}

export default BasicIcons
