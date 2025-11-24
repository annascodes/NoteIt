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
import { BsGrid3X2 } from "react-icons/bs";
import { LuTableProperties } from "react-icons/lu";
import { LuGrid3X3 } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { PiNote } from "react-icons/pi";
import { PiNotepad } from "react-icons/pi";
import { MdCancelPresentation } from "react-icons/md";
import { PiIdentificationCard } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";



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
    // grid: BsGrid3X2,
    grid: LuGrid3X3,
    table: LuTableProperties,
    // -----notes-------
    file: LuFileText,
    note: PiNote,
    notepad: PiNotepad,
    cancel: MdCancelPresentation,
    userCard:PiIdentificationCard,
    linkedIn: FaLinkedin,
    github: FaGithub,
    trash: LuTrash2,
    pencil: LuPencil



}

const BasicIcons = ({ icon = 'clipboard', className = 'text-4xl' }) => {
    const Icon = AllIcons[icon] || LuClipboardPenLine;
    return (
        <div className={`${className}`}>
            <Icon />
        </div>
    )
}

export default BasicIcons
