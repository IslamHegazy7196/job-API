const createJob=async(req,res)=>{
    res.send('created')
}
const getAllJobs=async(req,res)=>{
    res.send('all jobs')
}
const getSingleJob=async(req,res)=>{
    res.send('get single job')
}
const updateJob=async(req,res)=>{
    res.send('updated')
}
const deleteJob=async(req,res)=>{
    res.send('deleted')
}

module.exports={createJob,getAllJobs,getSingleJob,updateJob,deleteJob}