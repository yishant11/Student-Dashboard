import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Clock, Trophy } from "lucide-react";

const confidenceData = [
  { class: "Class 1", confidence: 85 },
  { class: "Class 2", confidence: 78 },
  { class: "Class 3", confidence: 92 },
  { class: "Class 4", confidence: 74 },
  { class: "Class 5", confidence: 88 },
  { class: "Class 6", confidence: 95 },
  { class: "Class 7", confidence: 82 },
  { class: "Class 8", confidence: 90 },
];

const performanceData = [
  { name: "Excellent (85-100%)", value: 35, color: "#10B981" },
  { name: "Good (70-84%)", value: 45, color: "#3B82F6" },
  { name: "Needs Improvement (<70%)", value: 20, color: "#F59E0B" },
];

const topStudents = [
  { name: "Alan Kumar", avatar: "AK", score: 835, trend: "+5", badge: "🏆" },
  { name: "Huff", avatar: "H", score: 794, trend: "+3", badge: "🥈" },
  { name: "Frienz Kitt", avatar: "FK", score: 708, trend: "+2", badge: "🥉" },
  { name: "St John Cyrille Test", avatar: "SC", score: 654, trend: "-1", badge: "4" },
  { name: "Hcnff", avatar: "H", score: 621, trend: "+1", badge: "5" },
];

const allStudents = [
  { name: "Alan Ka", avatar: "AK", class: "Class 6", score: 835 },
  { name: "Huff", avatar: "H", class: "Class 4", score: 794 },
  { name: "Frienz Kitt", avatar: "FK", class: "Class 3", score: 708 },
  { name: "St John C", avatar: "SC", class: "Class 2", score: 654 },
  { name: "Hcnff", avatar: "H", class: "Class 1", score: 621 },
  { name: "Eva", avatar: "E", class: "Class 5", score: 598 },
  { name: "Alex Thompson", avatar: "AT", class: "Class 7", score: 567 },
  { name: "Maya Singh", avatar: "MS", class: "Class 6", score: 543 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Greenwood Elementary School</h1>
          <p className="text-muted-foreground">Welcome back, School Admin! Here's your school overview.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">TOTAL STUDENTS</p>
                <p className="text-2xl font-bold">245</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">ACTIVE CLASSES</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">AVERAGE CONFIDENCE</p>
                <p className="text-2xl font-bold">86.2%</p>
              </div>
              <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-purple" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">LEARNING HOURS</p>
                <p className="text-2xl font-bold">830 pts</p>
              </div>
              <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Class wise Student Confidence Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Class wise Student Confidence</CardTitle>
            <p className="text-sm text-muted-foreground">Track confidence levels across all classes</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={confidenceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="class" />
                <YAxis />
                <Bar dataKey="confidence" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">Overall learning performance across all students</p>
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
      </div>

      {/* School Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            School Leaderboard - Top 5 Champions
          </CardTitle>
          <p className="text-sm text-muted-foreground">Top performing students this week ranked by points and achievements</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {topStudents.map((student, index) => (
              <div key={student.name} className="text-center">
                <div className="relative mb-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="font-semibold text-primary">{student.avatar}</span>
                  </div>
                  <Badge className="absolute -top-1 -right-1 w-6 h-6 rounded-full p-0 flex items-center justify-center">
                    {student.badge}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm">{student.name}</h4>
                <p className="text-xs text-muted-foreground">250 minutes</p>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {student.score} Points
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Students */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Students</CardTitle>
              <p className="text-sm text-muted-foreground">Complete list of students with their current progress</p>
            </div>
            <Button variant="outline" size="sm">All Students</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {allStudents.map((student) => (
              <div key={student.name} className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-medium text-primary text-sm">{student.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.class}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {student.score}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}