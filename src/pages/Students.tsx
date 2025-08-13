import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Search, Filter, Plus } from "lucide-react";

const studentsData = [
  { id: 1, name: "Alan Kumar", avatar: "AK", class: "Class 6", score: 835, status: "Active", performance: 95 },
  { id: 2, name: "Huff", avatar: "H", class: "Class 4", score: 794, status: "Active", performance: 89 },
  { id: 3, name: "Frienz Kitt", avatar: "FK", class: "Class 3", score: 708, status: "Active", performance: 85 },
  { id: 4, name: "St John Cyrille Test", avatar: "SC", class: "Class 2", score: 654, status: "Active", performance: 78 },
  { id: 5, name: "Hcnff", avatar: "H", class: "Class 1", score: 621, status: "Inactive", performance: 75 },
  { id: 6, name: "Eva", avatar: "E", class: "Class 5", score: 598, status: "Active", performance: 72 },
  { id: 7, name: "Alex Thompson", avatar: "AT", class: "Class 7", score: 567, status: "Active", performance: 68 },
  { id: 8, name: "Maya Singh", avatar: "MS", class: "Class 6", score: 543, status: "Active", performance: 65 },
  { id: 9, name: "David Chen", avatar: "DC", class: "Class 4", score: 521, status: "Active", performance: 62 },
  { id: 10, name: "Sarah Wilson", avatar: "SW", class: "Class 5", score: 498, status: "Inactive", performance: 58 },
];

export default function Students() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Users className="w-6 h-6" />
            Students
          </h1>
          <p className="text-muted-foreground">Manage and monitor all student profiles and progress</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search students..." className="pl-10" />
            </div>
            <Select defaultValue="all-classes">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-classes">All Classes</SelectItem>
                <SelectItem value="class-1">Class 1</SelectItem>
                <SelectItem value="class-2">Class 2</SelectItem>
                <SelectItem value="class-3">Class 3</SelectItem>
                <SelectItem value="class-4">Class 4</SelectItem>
                <SelectItem value="class-5">Class 5</SelectItem>
                <SelectItem value="class-6">Class 6</SelectItem>
                <SelectItem value="class-7">Class 7</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {studentsData.map((student) => (
          <Card key={student.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="font-semibold text-primary">{student.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{student.name}</h3>
                    <p className="text-xs text-muted-foreground">{student.class}</p>
                  </div>
                </div>
                <Badge 
                  variant={student.status === "Active" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {student.status}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Score</span>
                  <span className="text-sm font-semibold">{student.score} pts</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Performance</span>
                  <span className="text-sm font-semibold">{student.performance}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div 
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${student.performance}%` }}
                  />
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">245</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-success">220</p>
            <p className="text-sm text-muted-foreground">Active Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-warning">25</p>
            <p className="text-sm text-muted-foreground">Inactive Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple">86.2%</p>
            <p className="text-sm text-muted-foreground">Avg Performance</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}