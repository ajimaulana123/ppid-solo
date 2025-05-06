import { RequestStats, SubmissionStats } from "./types"

export async function fetchRequestStats(): Promise<{ data: RequestStats }> {
    const res = await fetch('/api/statistics/request-people', {
        cache: 'no-store'
      })
    return res.json()
}

export async function fetchSubmissionStats(): Promise<{ data: SubmissionStats }> {
    const res = await fetch('/api/statistics/submissions', {
        cache: 'no-store'
      })
    return res.json()
}