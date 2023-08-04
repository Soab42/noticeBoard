export function navigate(currentUser) {
  if (currentUser) {
    currentUser.email === "saif@gmail.com"
      ? router.push("/branch")
      : router.push("/dashboard");
  }
}
