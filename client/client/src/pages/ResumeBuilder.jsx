import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, Briefcase, FileText, FolderIcon, GraduationCap, Sparkles, User } from 'lucide-react';


const ResumeBuilder = () => {

const {resumeId} = useParams();

const [resumeDate, setResumeData] = useState({
  _id: '',
  title: '',
  personal_info: {},
  professional_summary: " ",
  experience: [],
  education: [],
  project: [],
  skills: [],
  template: "classsic", 
  accent_color : "#3B82F6",
  public: false

})

const loadExistingResume = async () => {
const resume = dummyResumeData.find(resume => resume._id === resumeId)
if (resume) {
  setResumeData(resume)
  document.title = resume.title
}
}

useEffect(() => {
  loadExistingResume()
},[])

const [activeSectionIndex, setActiveSectionIndex] = useState();
const [removebackground, setRemoveBackground] = useState(false);

const sections = [
  { id: 'personal', name: 'Personal Info', icon: User },
  { id: 'summary', name: 'Summary', icon: FileText },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'education', name: 'Education', icon:GraduationCap},
  { id: 'projects', name: 'Projects', icon: FolderIcon },
  { id: 'skills', name: 'Skills' , icon : Sparkles },
];


const activeSection  = sections[activeSectionIndex];

  return (
    <div>
  <div className='max-w-7xl mx-auto px-4 py-6'>
    <Link to={'/app'} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all' >
    <ArrowLeftIcon className='size-4' /> Back to Dashboard
    </Link>
  </div>

<div className='max-w-7xl mx-auto px-4 pb-8'>
  <div className='grid lg:grid-cols-12 gap-8'>
    {/* Left Section */}
    <div className='relative lg:col-span-5 rounded-lg overflow-hidden '>
      <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
{/*Progress Bar using activeSectionIndex*/}
<hr />


      </div>
    </div>

{/* 2:35:43 */}




    {/* Right Section */}
    <div></div>

  </div>
  
</div>



    </div>
  )
}

export default ResumeBuilder
