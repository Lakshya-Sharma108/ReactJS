import Card from './components/Card'
import React from 'react'

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/JRpwYzMw_Tnp6NxstRmBDM9kw8yQlaUyAR7WbU9b-F0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzU3LzMyLzQ2/LzM2MF9GXzEzNTcz/MjQ2MjhfYUd2bUxK/OE1UMmNORWtwaHda/R0R6MU5IMWpqckR2/bVguanBn",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/GxVOq9xuqtiB4Tpa8JJxeWKumoDP0A9x9UXm7yU0e4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/KEBdjpeVCfyDMC5nEKEAyCF_Z1kiV8jXWXbQ89_LLWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1sb2dvLW1hYy1i/b29rLXdoaXRlLW5v/dGVib29rLTE5MjU3/NTY3LmpwZw",
    name: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Cc3xQjdIz77CYjeG-H_aRl-l6YPfGihLefPY4wParcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWV0YS1jb21w/YW55LWxvZ29fMjY1/MzM5LTY2Ny5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA",
    name: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/4m77YUEK8eJHMRD4JHjFMFfR9i7W_xwpBACaX5riHQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM1Lzk4Ny9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/kuU7U_OkTSZGmDgj0nN1INoGVKmKcSKkZwHIPB13uos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzcwOS9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ERcywZKcfmeI99lpvYNG1uuXvAUuYCzxAfDlQgAqH-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcHJz/b2Z0d2FyZW1lZGlh/LmNvbS8yMTkvZmls/ZXMvMjAyNTEyLzY5/MmY1MDU1M2Q2MzMy/YjQ1M2JiYzVjMl9u/dmlkaWEtbG9nby12/ZXJ0LWJsay9udmlk/aWEtbG9nby12ZXJ0/LWJsa190aG1iLnBu/Zw",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/szCkFCBXl8EaFF2KVFqMxd-vp5K1X_TOZGBIjgA_WXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzQ4NC9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    name: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/br1oKmDEdKBn_4UCNB7KPtZcjMuj67itnIiJ-1gmAsE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWJtLmNvbS9kZXNp/Z24vbGFuZ3VhZ2Uv/ZjQ2ZDg4ODA1YTBk/MTU3ZTU1MTYyNzBk/NjY3MDAxYzQvbG9n/b19kb250X3NoYWRv/dy5zdmc",
    name: "IBM",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Chennai, India"
  }
];



  return (
    <div className='parent'>

      {jobOpenings.map(function(e, idx){

        return <div key={idx}>
          <Card company={e.name} logo={e.brandLogo} datePosted={e.datePosted} post={e.post} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
        </div>
      })}
    </div>
  )
}
 
export default App
 