import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProjects as fetchProjects, removeProjects } from '../api/firebase';
import { addNewProject } from '../api/firebase';

export default function useProjects() {
  const queryClient = useQueryClient();

  const projectsQuery = useQuery(['projects'], fetchProjects, {
    staleTime: 1000 * 60,
  })

  const addProject = useMutation(({ project, url }) => addNewProject(project, url),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    });

  const removeProject = useMutation(({ id }) => removeProjects(id),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    });

  return { projectsQuery, addProject, removeProject }
}

