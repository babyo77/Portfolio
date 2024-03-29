import { ProjectProps } from "@/interface";
import { Footer, Loader, Projects } from ".";
import { Badge } from "./ui/badge";

interface ProjectProp {
  project: ProjectProps[];
  techStack: string[];
}

const Container: React.FC<ProjectProp> = ({ project, techStack }) => {
  return (
    <div className=" container flex flex-col  space-y-2 ">
      <article>
        <div className="pt-4">
          <h2 className="font-mono text-lg tracking-tighter ">
            tech-stack
          </h2>
        </div>
        <div className="mt-4 mb-1 flex items-center gap-1 flex-wrap ">
          {techStack.map((tech, id) => (
            <Badge
              key={id}
              variant={"outline"}
              className="max-md:text-xs text-xs cursor-pointer hover:bg-zinc-100/5 hover:border-blue-300  transition-all duration-300 font-normal rounded-none shadow-none"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="pt-4">
          <h2 className="font-mono text-lg tracking-tighter ">
            projects
          </h2>
        </div>

        {!project ? (
          <div className="space-y-3 py-3 min-h-96 flex flex-col justify-center items-center">
            <Loader />
          </div>
        ) : (
          <ul className="space-y-3 py-3  flex flex-col ">
            {project.map((data, id) => (
              <Projects
                key={id}
                title={data.title}
                tech={data.tech}
                link={data.link}
                desc={data.desc}
                users={data.users}
              />
            ))}
          </ul>
        )}
      </article>
      <Footer />
    </div>
  );
};
export { Container };
