import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";
export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("profile", "components/profile/profile.tsx"),
  route("notifications", "components/notifications/notifications.tsx"),
  route("timesheet", "components/timesheet/timesheet.tsx"),
  route("settings", "components/settings/settings.tsx"),
  route("leave", "components/leave/leave.tsx"),
  route("salary", "components/salary/salary.tsx"),
  route("datatable", "components/datatable/datatable.tsx"),
  route("datatable/edit", "components/datatable/EditForm.tsx"),
  route("datatable/add", "components/datatable/AddForm.tsx"),
  route("login", "components/auth/login.tsx"),
] satisfies RouteConfig;
