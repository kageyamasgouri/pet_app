import { createClient } from '@supabase/supabase-js'

let supabase: ReturnType<typeof createClient> | undefined

export function getSupabaseClient() {
	if (supabase) return supabase

	const url = process.env.NEXT_PUBLIC_SUPABASE_URL
	const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

	if (!url || !key) {
		throw new Error('Supabaseの設定がありません。.env.localを確認してください。')
	}

	supabase = createClient(url, key)
	return supabase
}