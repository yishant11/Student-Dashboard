import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Medal, Award, Target } from "lucide-react";

const champions = [
  { name: "Alan Kumar", avatar: "AK", score: 835, position: 1 },
  { name: "Huff", avatar: "H", score: 794, position: 2 },
  { name: "Frienz Kitt", avatar: "FK", score: 708, position: 3 },
];

const completeRankings = [
  { name: "Alan Kumar", avatar: "AK", score: 835, badge: "🏆", performance: 95, rank: 1 },
  { name: "Huff", avatar: "H", score: 794, badge: "🥈", performance: 89, rank: 2 },
  { name: "Frienz Kitt", avatar: "FK", score: 708, badge: "🥉", performance: 85, rank: 3 },
  { name: "St John Cyrille Test", avatar: "SC", score: 654, badge: "4", performance: 78, rank: 4 },
  { name: "Hcnff", avatar: "H", score: 621, badge: "5", performance: 75, rank: 5 },
  { name: "Eva", avatar: "E", score: 598, badge: "6", performance: 72, rank: 6 },
  { name: "Alex Thompson", avatar: "AT", score: 567, badge: "7", performance: 68, rank: 7 },
  { name: "Maya Singh", avatar: "MS", score: 543, badge: "8", performance: 65, rank: 8 },
];

const achievements = [
  { title: "Top Scorer", subtitle: "This Week", points: "830 points", icon: Trophy, color: "text-yellow-500" },
  { title: "Longest Streak", subtitle: "For this Month", points: "65 lessons", icon: Target, color: "text-orange-500" },
  { title: "Most Active", subtitle: "Today", points: "Active", icon: Medal, color: "text-green-500" },
  { title: "Highest Improvement", subtitle: "This Month", points: "+45%", icon: Award, color: "text-purple-500" },
];

export default function Leaderboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            School Leaderboard
          </h1>
          <p className="text-muted-foreground">Celebrating top performers and encouraging healthy competition</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Updated: 12/05/2024</p>
        </div>
      </div>

      {/* Champions Podium */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Champions Podium
          </CardTitle>
          <p className="text-sm text-muted-foreground">Top ranking this Season</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-center gap-8">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gray-600 text-lg">H</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <h3 className="font-semibold">Huff</h3>
              <p className="text-sm text-muted-foreground">794 pts</p>
              <Badge className="mt-2 bg-gray-100 text-gray-700">2nd Place</Badge>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-yellow-700 text-xl">AK</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              </div>
              <h3 className="font-semibold">Alan Kumar</h3>
              <p className="text-sm text-muted-foreground">835 pts</p>
              <Badge className="mt-2 bg-yellow-100 text-yellow-700">1st Place</Badge>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-orange-700 text-lg">FK</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <h3 className="font-semibold">Frienz Kitt</h3>
              <p className="text-sm text-muted-foreground">708 pts</p>
              <Badge className="mt-2 bg-orange-100 text-orange-700">3rd Place</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <Input placeholder="Search students" className="max-w-sm" />
        <Select defaultValue="all-grades">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-grades">All Grades</SelectItem>
            <SelectItem value="grade-1">Grade 1</SelectItem>
            <SelectItem value="grade-2">Grade 2</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="this-week">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">More Filters</Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Complete Rankings */}
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Complete Rankings</CardTitle>
              <p className="text-sm text-muted-foreground">All students ranked by points earned this week</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {completeRankings.map((student) => (
                  <div key={student.rank} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-medium text-primary text-sm">{student.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${student.performance}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{student.performance}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{student.score}</p>
                      <p className="text-xs text-muted-foreground">pts</p>
                    </div>
                    <Badge variant={student.rank <= 3 ? "default" : "secondary"} className="w-8 h-8 rounded-full">
                      {student.rank}
                    </Badge>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${achievement.color}`} />
                  <h3 className="font-semibold text-sm">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{achievement.subtitle}</p>
                  <p className="font-bold text-lg">{achievement.points}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}