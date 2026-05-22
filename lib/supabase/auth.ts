import { NextRequest } from 'next/server'

export function isAdminAuthorized(
  request: NextRequest,
  body?: { adminPassword?: string }
) {
  const expected = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
  if (!expected) return false

  const headerPassword = request.headers.get('x-admin-password')
  const bodyPassword = body?.adminPassword

  return headerPassword === expected || bodyPassword === expected
}
