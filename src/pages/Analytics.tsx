import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Clock, BookOpen, Users, TrendingUp } from "lucide-react";

const performanceData = [
  { name: "Excellent (85-100%)", value: 35, color: "#10B981" },
  { name: "Good (70-84%)", value: 45, color: "#3B82F6" },
  { name: "Needs Improvement (<70%)", value: 20, color: "#F59E0B" },
];

const skillData = [
  { skill: "Vocabulary", performance: 85, color: "#3B82F6" },
  { skill: "Grammar", performance: 78, color: "#10B981" },
  { skill: "Pronunciation", performance: 90, color: "#F59E0B" },
  { skill: "Listening", performance: 82, color: "#8B5CF6" },
  { skill: "Speaking", performance: 74, color: "#EF4444" },
];

const barChartData = [
  { skill: "Vocabulary", performance: 85 },
  { skill: "Grammar", performance: 78 },
  { skill: "Pronunciation", performance: 90 },
  { skill: "Listening", performance: 82 },
  { skill: "Speaking", performance: 74 },
];

const engagementData = [
  { month: "Jan", current: 75, previous: 65 },
  { month: "Feb", current: 68, previous: 70 },
  { month: "Mar", current: 85, previous: 75 },
  { month: "Apr", current: 78, previous: 80 },
  { month: "May", current: 92, previous: 85 },
  { month: "Jun", current: 88, previous: 90 },
  { month: "Jul", current: 95, previous: 88 },
  { month: "Aug", current: 90, previous: 92 },
];

const monthlyData = [
  { subject: "Vocabulary", percentage: "95%", improvement: "+5%" },
  { subject: "Grammar", percentage: "78%", improvement: "+3%" },
  { subject: "Pronunciation", percentage: "82%", improvement: "+8%" },
  { subject: "Listening", percentage: "76%", improvement: "+2%" },
  { subject: "Speaking", percentage: "69%", improvement: "+4%" },
];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics & Reports</h1>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Learning Hours</p>
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-xs text-success">+12% from last month</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Lessons Completed</p>
                <p className="text-2xl font-bold">1,892</p>
                <p className="text-xs text-success">+8% from last month</p>
              </div>
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Session Time</p>
                <p className="text-2xl font-bold">24 min</p>
                <p className="text-xs text-muted-foreground">per session</p>
              </div>
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Students</p>
                <p className="text-2xl font-bold">1,156</p>
                <p className="text-xs text-success">+5% this week</p>
              </div>
              <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Student Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Student Performance Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">Overall accuracy breakdown across all students</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {performanceData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm">{entry.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">{entry.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Average Performance by Skill Area */}
        <Card>
          <CardHeader>
            <CardTitle>Average Performance by Skill Area</CardTitle>
            <p className="text-sm text-muted-foreground">Individual skill performance metrics and improvement</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillData.map((skill) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-muted-foreground">{skill.performance}%</span>
                  </div>
                  <Progress value={skill.performance} className="h-2" />
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis />
                  <Bar dataKey="performance" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance and Engagement Trends */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Student Engagement Trends</CardTitle>
              <p className="text-sm text-muted-foreground">Monthly engagement patterns and learning time</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar dataKey="current" fill="#3B82F6" name="Current Year" />
                  <Bar dataKey="previous" fill="#10B981" name="Previous Year" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Month-over-Month Improvement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {monthlyData.map((item) => (
              <div key={item.subject} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{item.subject}</p>
                  <p className="text-xs text-muted-foreground">{item.percentage}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-success">{item.improvement}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}