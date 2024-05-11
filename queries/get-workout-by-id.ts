import { TypedSupabaseClient } from '@/utils/types'

export function getWorkoutById(client: TypedSupabaseClient, workoutId: number) {
  return client
    .from('workouts')
    .select(
      '*'
    )
    .eq('id', workoutId)
    .throwOnError()
    .single()
}

// EXAMPLES FETCHNG DATA

    // server side:
        // const queryClient = new QueryClient()
        // const cookieStore = cookies()
        // const supabase = useSupabaseServer(cookieStore)

        // await prefetchQuery(queryClient, getWorkoutById(supabase, workoutId))

    // client side:
        // const supabase = useSupabaseBrowser()
        // const { data: workout, isLoading, isError } = useQuery(getCountryById(supabase, workoutId)
        
        
    // So we use either useSupabaseBrowser or useSupabaseServer. They share a cache key. If data is fetched somewhere
    // on the server side, and we want it on the client, it uses the cached one!


