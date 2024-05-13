import { TypedSupabaseClient } from '@/utils/types'

export function getRandomWorkout(client: TypedSupabaseClient, randomId: number) {
  return client
    .from('workouts')
    .select(
      '*'
    )
    .eq('id', randomId)
    .limit(1)
    .single()
}

// EXAMPLES FETCHNG DATA

    // server side:
        // const queryClient = new QueryClient()
        // const cookieStore = cookies()
        // const supabase = useSupabaseServer(cookieStore)

        // await prefetchQuery(queryClient, getRandomWorkout(supabase))

    // client side:
        // const supabase = useSupabaseBrowser()
        // const { data: workout, isLoading, isError } = useQuery(getRandomWorkout(supabase))
        
        
    // So we use either useSupabaseBrowser or useSupabaseServer. They share a cache key. If data is fetched somewhere
    // on the server side, and we want it on the client, it uses the cached one!

    // MAKE SURE TO IMPORT USEQUERY FROM SUPABASE HELPER: 
        // import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";



