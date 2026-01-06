import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Users, CheckCircle } from 'lucide-react';
import { SectionTitle, Card, Button, Badge, MentorCard } from '../components/ui';
import { topics, getTopicById } from '../data/topics';
import { mentors } from '../data/mentors';

const colorClasses = {
  purple: {
    bg: 'bg-growth-purple/10',
    icon: 'text-growth-purple',
    badge: 'purple',
  },
  green: {
    bg: 'bg-success-green/10',
    icon: 'text-success-green',
    badge: 'green',
  },
  amber: {
    bg: 'bg-energy-amber/10',
    icon: 'text-energy-amber',
    badge: 'amber',
  },
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    badge: 'blue',
  },
};

function TopicsList() {
  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-growth-purple/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Mentoring Topics
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Deep expertise across all digital marketing disciplines. Find mentors who specialize in what you want to learn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/topics/${topic.id}`}>
                  <Card className="group cursor-pointer h-full hover:border-growth-purple transition-colors">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${colorClasses[topic.color].bg}`}
                    >
                      <topic.icon className={`w-8 h-8 ${colorClasses[topic.color].icon}`} />
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-growth-purple transition-colors">
                      {topic.name}
                    </h3>

                    <p className="text-text-secondary mb-4">{topic.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.subtopics.slice(0, 3).map((subtopic) => (
                        <Badge key={subtopic} color={topic.color} size="sm">
                          {subtopic}
                        </Badge>
                      ))}
                      {topic.subtopics.length > 3 && (
                        <Badge color="gray" size="sm">
                          +{topic.subtopics.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border-light">
                      <div className="flex items-center gap-2 text-text-muted">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{topic.mentorCount} mentors</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-growth-purple opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TopicDetail({ topicId }) {
  const topic = getTopicById(topicId);

  if (!topic) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Topic not found</h1>
          <Link to="/topics">
            <Button>Back to Topics</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get mentors for this topic (mock filtering)
  const topicMentors = mentors.filter((mentor) =>
    mentor.expertise.some((exp) =>
      topic.name.toLowerCase().includes(exp.toLowerCase()) ||
      exp.toLowerCase().includes(topic.name.split(' ')[0].toLowerCase())
    )
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero */}
      <section className={`py-16 bg-gradient-to-br ${colorClasses[topic.color].bg} to-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/topics"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-growth-purple mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Topics
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[topic.color].bg}`}
              >
                <topic.icon className={`w-10 h-10 ${colorClasses[topic.color].icon}`} />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                {topic.name}
              </h1>

              <p className="text-lg text-text-secondary mb-6">{topic.description}</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-growth-purple" />
                  <span className="font-semibold">{topic.mentorCount} expert mentors</span>
                </div>
              </div>
            </div>

            {/* Subtopics */}
            <Card className="lg:ml-auto">
              <h3 className="font-bold text-text-primary mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                {topic.subtopics.map((subtopic) => (
                  <li key={subtopic} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${colorClasses[topic.color].icon}`} />
                    <span className="text-text-secondary">{subtopic}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle={`${topic.name} Mentors`}
            title="Featured Mentors in This Topic"
            description="Learn from practitioners who specialize in this area"
          />

          {topicMentors.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topicMentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MentorCard mentor={mentor} />
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/mentors">
                  <Button variant="secondary" icon={ArrowRight} iconPosition="right">
                    Browse All Mentors
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary mb-4">
                Looking for mentors in this topic? Check out our full mentor directory.
              </p>
              <Link to="/mentors">
                <Button icon={ArrowRight} iconPosition="right">
                  Browse All Mentors
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Explore More"
            title="Related Topics"
            description="Expand your knowledge across marketing disciplines"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {topics
              .filter((t) => t.id !== topic.id)
              .slice(0, 3)
              .map((relatedTopic, index) => (
                <motion.div
                  key={relatedTopic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/topics/${relatedTopic.id}`}>
                    <Card className="group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[relatedTopic.color].bg}`}
                        >
                          <relatedTopic.icon className={`w-6 h-6 ${colorClasses[relatedTopic.color].icon}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-primary group-hover:text-growth-purple transition-colors">
                            {relatedTopic.name}
                          </h4>
                          <p className="text-sm text-text-muted">{relatedTopic.mentorCount} mentors</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-growth-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Topics() {
  const { topicId } = useParams();

  if (topicId) {
    return <TopicDetail topicId={topicId} />;
  }

  return <TopicsList />;
}
